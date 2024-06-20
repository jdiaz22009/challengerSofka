import React, {useEffect, useRef} from 'react';
import styles from './styles';

import {Modal, View} from 'react-native';
import LottieView from 'lottie-react-native';

import loaderFile from '@/datasource/loader.json';

interface ILoader {
  show: boolean;
}

const Loader = (props: ILoader) => {
  let animationRef = useRef<any>(null);

  useEffect(() => {
    const play = () => {
      animationRef?.current?.play();
    };
    const pause = () => {
      animationRef?.current?.pause();
    };
    if (animationRef && animationRef.current != null) {
      if (props.show) {
        play();
      } else {
        pause();
      }
    }
    return () => {
      pause();
    };
  }, [props.show, animationRef]);

  return (
    <Modal animationType="none" visible={props.show}>
      <View style={styles.modalContainer}>
        <LottieView
          ref={animationRef}
          source={loaderFile}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
    </Modal>
  );
};

export default Loader;
