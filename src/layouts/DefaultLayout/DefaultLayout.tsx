import { Footer } from "@components";

import type { DefaultLayoutProps } from "./types";

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
}: DefaultLayoutProps) => {
  return (
    <>
      {/* <Header /> */}
      <main className="h-full overflow-auto bg-gradient-to-br from-pink-300 via-fuchsia-200 to-purple-300 p-8">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
