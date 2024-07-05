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
    setStartSlot(undefined);
  };

  const handleDeleteSlot = (selectedEntryId: number) => {
    setSelectedSlots((prev) => {
      const newSelectedSlots = { ...prev };
      delete newSelectedSlots[selectedEntryId];
      return newSelectedSlots;
    });
  };

  const removeOverlappedSlots = (endSlot: string, dateOfStartSlot: string) => {
    const selectedSlotsPerDate = Object.fromEntries(
      Object.entries(selectedSlots).filter(([, slot]) => slot.date === dateOfStartSlot),
    );
    Object.entries(selectedSlotsPerDate).forEach(
      ([id, { startSlot: selectedStartSlot, endSlot: selectedEndSlot }]) => {
        const startSlotTime = startSlot && startSlot.split('/').pop();
        const endSlotTime = endSlot.split('/').pop();
        if (
          startSlotTime &&
          endSlotTime &&
          selectedStartSlot > startSlotTime &&
          selectedEndSlot < endSlotTime
        ) {
          handleDeleteSlot(Number(id));
        }
      },
    );
  };

  const onClickSlot = (targetSlot: string, selectedEntryId?: number) => {
    if (selectedEntryId !== undefined) {
      if (startSlot === undefined) {
        handleDeleteSlot(selectedEntryId);
      }
      setStartSlot(undefined);
    } else if (startSlot !== undefined) {
      handleCompleteSlot(targetSlot);
    } else {
      handleSelectSlot(targetSlot);
    }
  };

  return { startSlot, onClickSlot };
};

export default useSlotSeletion;
