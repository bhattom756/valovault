import React from 'react';
import { Modal as RNMODAL, KeyboardAvoidingView, Platform, View, Text } from 'react-native';

const Modal = ({
    isOpen,
    withInput,
    children,
    ...rest
}) => {
    const content = withInput ? (
        <KeyboardAvoidingView
            className='items-center justify-center flex-1 px-3 bg-zinc-900/40'
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {children}
        </KeyboardAvoidingView>
    ) : (
        <View className="items-center justify-center flex-1 px-3 bg-zinc-900/40">
            {children}
        </View>
    );

    return (
        <RNMODAL visible={isOpen} {...rest}>
            {content}
        </RNMODAL>
    );
};

export default Modal;