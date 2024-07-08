import { useSelectContext } from 'pages/selectSchedule/contexts/useSelectContext';

const useSlotSeletion = () => {
  const { startSlot, setStartSlot, selectedSlots, setSelectedSlots } = useSelectContext();

  const handleSelectSlot = (targetSlot: string) => {
    setStartSlot(targetSlot);
  };

  const handleCompleteSlot = (endSlot: string) => {
    const dateOfStartSlot = startSlot && startSlot.substring(0, startSlot.lastIndexOf('/'));
    const dateOfEndSlot = endSlot.substring(0, endSlot.lastIndexOf('/'));
    if (startSlot && dateOfStartSlot === dateOfEndSlot) {
      const newSelectedSlot = {
        date: dateOfStartSlot,
        startSlot: startSlot && startSlot.substring(startSlot.lastIndexOf('/') + 1),
        endSlot: endSlot.substring(endSlot.lastIndexOf('/') + 1),
        priority: 0,
      };

      const keys = Object.keys(selectedSlots).map(Number);
      const newKey = keys.length ? Math.max(...keys) + 1 : 0;

      setSelectedSlots((prev) => {
        const newSelectedSlots = { ...prev };
        newSelectedSlots[newKey] = newSelectedSlot;
        return newSelectedSlots;
      });
      removeOverlappedSlots(endSlot, dateOfStartSlot);
    }
    setStartSlot(null);
  };

  const handleDeleteSlot = (selectedEntryId: number) => {
    setSelectedSlots((prev) => {
      const newSelectedSlots = { ...prev };
      delete newSelectedSlots[selectedEntryId];
      return newSelectedSlots;
    });
  };

  const removeOverlappedSlots = (endSlot: string, dateOfStartSlot: string) => {
    const selectedSlotsPerDate = Object.entries(selectedSlots).filter(
      ([, slot]) => slot.date === dateOfStartSlot,
    );

    selectedSlotsPerDate.forEach(
      ([id, { startSlot: selectedStartSlot, endSlot: selectedEndSlot }]) => {
        const currentStartSlotTime = startSlot && startSlot.split('/').pop();
        const currentEndSlotTime = endSlot.split('/').pop();
        if (
          currentStartSlotTime &&
          currentEndSlotTime &&
          selectedStartSlot > currentStartSlotTime &&
          selectedEndSlot < currentEndSlotTime
        ) {
          handleDeleteSlot(Number(id));
        }
      },
    );
  };

  const onClickSlot = (targetSlot: string, selectedEntryId?: number) => {
    if (selectedEntryId !== undefined) {
      if (startSlot === null) {
        handleDeleteSlot(selectedEntryId);
      }
      setStartSlot(null);
    } else if (startSlot !== null) {
      handleCompleteSlot(targetSlot);
    } else {
      handleSelectSlot(targetSlot);
    }
  };

  return { startSlot, onClickSlot };
};

export default useSlotSeletion;
