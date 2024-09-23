import React from "react";
import { prisma } from "@/src/lib/prisma";
import { getAuthSession } from "@/src/lib/auth";
import { getRequiredAuthSession } from "@/src/lib/auth";
import DeleteAccount from "./delete/DeleteAccount";
import Container from "@/components/elements/Container";
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutTitle,
} from "@/src/components/Layout/Layout";

export default async function AccountPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getRequiredAuthSession();
  const sessions = await getAuthSession();

  if (!sessions) {
    throw new Error("No session found");
  }

  return (
    <Container>
      <div className="container">
        <Layout>
          <LayoutHeader>
            <LayoutTitle>Account</LayoutTitle>
          </LayoutHeader>
          <LayoutContent>
            <DeleteAccount />
          </LayoutContent>
        </Layout>
      </div>
    </Container>
  );
}
