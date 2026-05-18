// components/SideLeft.tsx
"use client";
import Link from 'next/link';

import Image from 'next/image';
import SideMenu from "./SideMenu";

interface SideLeftProps {
  collapsed: boolean;
}

function SideLeft({ collapsed }: SideLeftProps) {
  return (
    <div className={`sidebar_left ${collapsed ? 'collapsed' : ''}`}>
      <Link href="/dashboard" className="logo">
        <Image
          src="/assets/images-dashboard/logo/logo.svg"
          alt="logo"
          width={131}
          height={32}
        />
      </Link>
      <SideMenu />
    </div>
  );
}

export default SideLeft;