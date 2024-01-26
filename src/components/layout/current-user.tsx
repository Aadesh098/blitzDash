import React from "react";

import { useGetIdentity } from "@refinedev/core";
import { Popover } from "antd";
import { CustomAvatar } from "../custom-avatar";
import type { User } from "@/graphql/schema.types";

export const CurrentUser = () => {
  const { data: user } = useGetIdentity<User>();

  return (
    <>
      <Popover
        placement="bottomRight"
        // content={content}
        trigger="click"
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
        <CustomAvatar
        //   name={user?.name}
        //   src={user?.avatarUrl}
          size="default"
          style={{ cursor: "pointer" }}
        /> 
      </Popover>
    </>
  );
};