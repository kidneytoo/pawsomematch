'use client';

import NextButton from "@/components/common/NextButton/NextButton";
import { useMobileDetect } from "@/hooks/useMobileDetect";

const IosButton = () => {
  const {isIos} = useMobileDetect();
  return (
    <NextButton type="link" href={isIos() ? "/ios-experience" : "/pre-intro"} />
  )
}
export default IosButton;