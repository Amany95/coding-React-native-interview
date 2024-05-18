import React from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Modal from 'react-native-modal';

import {Icon} from '@rneui/themed';

import Styles from './Styles';

export const VideoModal = ({isVisible, onClose, videoId}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={Styles.modal}
      backdropOpacity={0.8}
      useNativeDriver>
      <View style={Styles.container}>
        <TouchableOpacity onPress={onClose} style={Styles.closeButton}>
          <Icon name="close" size={30} color="#fff" />
        </TouchableOpacity>
        {videoId ? (
          <YoutubePlayer height={300} play={true} videoId={videoId} />
        ) : (
          <Text style={Styles.noTrailerText}>Trailer not available</Text>
        )}
      </View>
    </Modal>
  );
};
