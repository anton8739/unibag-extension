import React, {useEffect} from 'react';
import {Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {useState} from 'react';
import Layout from "./components/layout/Layout";
import BellIcon from "./components/common/Icons/BellIcon";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
    const [appOpened, setAppOpened] = useState(false);
    const closeApp = () => {
        setAppOpened(false)
    }
    return (
        <>
            <Box display={appOpened ? "none" : "flex" } background='#FF77A0' height='45px' alignItems='center'
                 position='fixed'
                 right='0'
                 padding='10px 0px 10px 10px'
                 transition='1s'
                 borderRadius='8px 0 0 8px'
                 overflow='hidden'
                 top='calc(50% - 20px)'
                 cursor='pointer'
                 transform='translate(24px, 0px)'
                 _hover={{transform: 'translate(0px, 0px)'}}
                 onClick={() =>setAppOpened(!appOpened)}
            >
                <Box width='30px' display='flex' alignItems='center' justifyContent='center' color='#FFFFFF' fontSize='18px' fontWeight='600'>U</Box>
                <BellIcon style={{width: '24px',height: '24px'}}/>
            </Box>
            <Modal isOpen={appOpened} onClose={closeApp} size="sm" closeOnOverlayClick={false}>
                <ModalOverlay/>
                <ModalContent containerProps={{justifyContent: 'flex-end', paddingRight: '2rem', zIndex: 10000}}>
                    <ModalBody style={{padding: 0, borderRadius: 'unset'}}>
                        <Layout closeApp={closeApp}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    );
}

export default App;
