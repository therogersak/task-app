"use client";

import { useRouter } from "next/navigation";
import {
  EllipsisHorizontalIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Title({ title }) {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-5 pb-10">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="flex items-center cursor-pointer"
      >
        <h1 className="font-bold text-[25px]">{title}</h1>
      </div>
      <div label="More" className="relative" onClick={() => setToggle(!toggle)}>
        <EllipsisHorizontalIcon className="icon text-gray-400" />
        {toggle && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
            className="absolute top-10 right-0 w-[150px] flex-col items-center bg-indigo-400 rounded-md cursor-pointer"
          >
            <div
              onClick={() => router.push("/tasks")}
              className="menu-button rounded-tl-md rounded-tr-md"
            >
              <DocumentTextIcon className="h-6 w-6" />
              <p>All Tasks</p>
            </div>
            <div
              onClick={() => router.push("/profile")}
              className="menu-button rounded-br-md rounded-bl-md"
            >
              <UserIcon className="h-6 w-6" />
              <p>Profile</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
