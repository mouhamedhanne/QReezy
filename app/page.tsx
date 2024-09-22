import { getAuthSession } from "@/src/lib/auth";
import AuthenticatedContent from "./AuthentificatedContent";
import PublicContent from "./PublicContent";

export default async function HomePage() {
  const session = await getAuthSession();

  if (session?.user) {
    return <AuthenticatedContent session={session} />;
  }
  return <PublicContent />;
}
