declare module "react-qr-scanner" {
  import { ComponentType } from "react";

  interface QrReaderProps {
    delay?: number;
    onError: (error: Error) => void;
    onScan: (data: string | null) => void | Promise<void>;
    style?: React.CSSProperties;
    constraints?: MediaTrackConstraints;
  }

  const QrReader: ComponentType<QrReaderProps>;
  export default QrReader;
}
