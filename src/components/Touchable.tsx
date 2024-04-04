import React from 'react'
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

export interface TouchableProps extends TouchableOpacityProps {
  opacity?: boolean;
  delayPressIn?: number;
  children?: JSX.Element | string;
}

const Touchable: React.FC<TouchableProps> = ({
  children,
  opacity = false,
  delayPressIn = 0,
  ...props
}) =>
  Platform.OS === 'ios' || !!opacity ? (
    <TouchableOpacity { ...props } delayPressIn={ delayPressIn }>
      { children }
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback { ...props } delayPressIn={ delayPressIn }>
      { children }
    </TouchableNativeFeedback>
  )

Touchable.displayName = 'Touchable'

export default Touchable
