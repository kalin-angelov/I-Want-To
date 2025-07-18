import { useWishStore } from '@/store/wish';
import { Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { toaster } from '../ui/toaster';
import { useColorModeValue } from '../ui/color-mode';
import { 
    DialogActionTrigger, 
    DialogBody, 
    DialogCloseTrigger, 
    DialogContent, 
    DialogFooter, 
    DialogHeader, 
    DialogRoot, 
    DialogTitle, 
    Button } from '@chakra-ui/react';

const EditWish = ( { open, setOpen, wish }) => {

    const { updateWish } = useWishStore();
    const [updatedWish, setUpdatedWish] = useState(wish);

    const saveUpdatedWish = async ( id, correctedWish ) => {

        const { success, message } = await updateWish(id, correctedWish);
        
        if (!success) {
            toaster.error({
                title: "Error",
                description: message,
            })
        } else {
            toaster.success({
                title: "Success",
                description: "Wish updated successfully",
            })

            setOpen(false);
        }
    };

    return (
        <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
  
            <DialogContent bg={useColorModeValue("gray.100", "gray.700")}>
                <DialogHeader>
                    <DialogTitle>Correct your Wish</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Textarea 
                        size={"xl"}
                        value={updatedWish.wish}
                        onChange={(e) => setUpdatedWish({ ...updatedWish, wish: e.target.value })}
                    />
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button onClick={() => saveUpdatedWish(wish.id, updatedWish)}>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
  )
};

export default EditWish;
