
import { Button } from '@/components/ui/button';
import { DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle } from '@/components/ui/dialog';
import { useWhishStore } from '@/store/whish';
import { Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { toaster } from '../ui/toaster';
import { useColorModeValue } from '../ui/color-mode';

const EditWhish = ( { open, setOpen, whish }) => {

    const { updateWhish } = useWhishStore();
    const [updatedWhish, setUpdatedWhish] = useState(whish);

    const saveUpdatedWhish = async ( id, correctedWhish ) => {

        const { success, message } = await updateWhish(id, correctedWhish);
        
        if (!success) {
            toaster.error({
                title: "Error",
                description: message,
            })
        } else {
            toaster.success({
                title: "Success",
                description: "Whish updated successfully",
            })

            setOpen(false);
        }
    };

    return (
        <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
  
            <DialogContent bg={useColorModeValue("gray.100", "gray.700")}>
                <DialogHeader>
                    <DialogTitle>Correct your Whish</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Textarea 
                        size={"xl"}
                        value={updatedWhish.whish}
                        onChange={(e) => setUpdatedWhish({ ...updatedWhish, whish: e.target.value })}
                    />
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button onClick={() => saveUpdatedWhish(whish._id, updatedWhish)}>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
  )
};

export default EditWhish;
