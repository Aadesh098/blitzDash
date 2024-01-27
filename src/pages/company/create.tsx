import { CompanyList } from "./list";
import { CompanyCreateModal } from "@/components/create-modal";

export const Create = () => {
  return (
    <CompanyList>
      <CompanyCreateModal />
    </CompanyList>
  );
};