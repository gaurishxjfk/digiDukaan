import { ReactNode } from "react";

const MaxWidthWrapper = ({
  classNameProp,
  children,
}: {
  classNameProp?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${classNameProp}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
