import { SelectSlotType, useSelectContext } from 'pages/selectSchedule/contexts/useSelectContext';

const useSlotSeletion = () => {
  const { startSlot, setStartSlot, selectedSlots, setSelectedSlots } = useSelectContext();

  const handleSelectSlot = (targetSlot: string) => {
    setStartSlot(targetSlot);
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

    const handleCompleteSlot = (targetSlot: string) => {
        const dateOfStartSlot = startSlot?.substring(0, startSlot.lastIndexOf('/'));
        const dateOfTargetSlot = targetSlot.substring(0, targetSlot.lastIndexOf('/'))
        if (startSlot && dateOfStartSlot === dateOfTargetSlot){
            let newSelectedSlot: SelectSlotType;
            if (startSlot > targetSlot){
                newSelectedSlot = {
                    date:dateOfStartSlot,
                    startSlot:targetSlot.substring(targetSlot.lastIndexOf('/')+1),
                    endSlot:startSlot?.substring(startSlot.lastIndexOf('/')+1),
                    priority:0,
                }
            } else {
                newSelectedSlot = {
                    date:dateOfStartSlot,
                    startSlot:startSlot?.substring(startSlot.lastIndexOf('/')+1),
                    endSlot:targetSlot.substring(targetSlot.lastIndexOf('/')+1),
                    priority:0,
                }
            }

            const keys = Object.keys(selectedSlots).map(Number)
            const newKey = keys.length ? Math.max(...keys) + 1 : 0;
            const newSelectedSlots = {...selectedSlots};
            newSelectedSlots[newKey] = newSelectedSlot;
            setSelectedSlots(newSelectedSlots)

            removeOverlappedSlots(targetSlot, dateOfStartSlot);
        }
        setStartSlot(null);
    }


  const handleDeleteSlot = (selectedEntryId: number) => {
    setSelectedSlots((prev) => {
      const newSelectedSlots = { ...prev };
      delete newSelectedSlots[selectedEntryId];
      return newSelectedSlots;
    });
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
