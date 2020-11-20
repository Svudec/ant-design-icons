// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MehFilledSvg from '@ant-design/icons-svg/lib/asn/MehFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MehFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MehFilledSvg}></AntdIcon>;
};

MehFilled.displayName = 'MehFilled';
MehFilled.inheritAttrs = false;
export default MehFilled;