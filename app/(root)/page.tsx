"use client"
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { Children } from "react";

const SetupPage = () => {
  return (
    <div><UserButton afterSignOutUrl="/"/>
    <Modal title="test" description="test"isOpen onClose={()=>{}}>
      Children
      </Modal></div>
  );
}
export default SetupPage;
