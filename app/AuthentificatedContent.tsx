import { getAuthSession } from "@/src/lib/auth";
import Link from "next/link";
import Container from "@/components/elements/Container";
import Qrcode from "@/components/QR-code/QRCode";

export type AuthenticatedContentProps = { session: any };

const AuthenticatedContent: React.FC<AuthenticatedContentProps> = async ({
  session,
}: any) => {
  return (
    <Container>
      <div className="container">
        <Qrcode />
      </div>
    </Container>
  );
};

export default AuthenticatedContent;
