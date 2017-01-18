import * as React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm: React.StatelessComponent<any> = ({children, visible, onAccept, onDecline}) => {
    return (
        <Modal
            animationType="slide"
            onRequestClose={() => { }}
            visible={visible}
            transparent>
            <View>
                <CardSection>
                    <Text>
                        {children}
                    </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept} >Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
}
