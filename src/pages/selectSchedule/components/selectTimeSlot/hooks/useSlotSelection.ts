import { SelectSlotType, useSelectContext } from 'pages/selectSchedule/contexts/useSelectContext';

const useSlotSeletion = () => {
    const {startSlot, setStartSlot, selectedSlots, setSelectedSlots} = useSelectContext();

    const handleSelectSlot = (targetSlot: string) => {
        setStartSlot(targetSlot);
    }

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
        }
        setStartSlot(undefined);
    }

    const handleDeleteSlot = (selectedEntryId: number) => {
        const newSelectedSlots = {...selectedSlots};
        delete newSelectedSlots[selectedEntryId];
        setSelectedSlots(newSelectedSlots);
    }

    const onClickSlot = (targetSlot:string, selectedEntryId?:number)=>{
        if (selectedEntryId !== undefined){
            if (startSlot === undefined){
                handleDeleteSlot(selectedEntryId);
            }
            setStartSlot(undefined)
        } else if (startSlot !== undefined){
            handleCompleteSlot(targetSlot)
        } else {
            handleSelectSlot(targetSlot)
        }
    }

    return {startSlot, onClickSlot}
}

export default useSlotSeletion