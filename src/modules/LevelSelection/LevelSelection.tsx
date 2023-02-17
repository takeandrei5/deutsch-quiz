import type { NextRouter } from "next/router";
import { useRouter } from "next/router";

import { Breadcrumb, Card } from "../../components";
import type { BreadcrumbItem } from "../../components/Breadcrumb/types";
import cx from "classnames";

const LevelSelection: React.FC = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Niveau wählen", href: "/levels" },
  ];

  const router: NextRouter = useRouter();

  return (
    <div className="flex flex-col items-center gap-4">
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <h1 className="text-4xl font-bold text-neutral">Los geht&apos;s</h1>
      <div
        className={cx("grid grid-flow-col grid-cols-1 justify-center", {
          "md:grid-cols-2": false,
        })}
      >
        <Card
          cardTitle="A1"
          cardDescription="Mit A1 lernen Sie die Grundbausteine ​​der deutschen Sprache, sowohl was Grammatik als auch Wortschatz betrifft."
          buttonLabel="Start"
          onButtonClick={() => void router.push("/levels/A1/topics")}
        />

        {/* <Card
          cardTitle="B1"
          cardDescription="Beginner B1"
          buttonLabel="Start"
          onButtonClick={() => void router.push("/levels/B1/topics")}
        />
        <Card
          cardTitle="A2"
          cardDescription="Beginner A2"
          buttonLabel="Start"
          onButtonClick={() => void router.push("/levels/A2/topics")}
        />
        <Card
          cardTitle="B2"
          cardDescription="Beginner B2"
          buttonLabel="Start"
          onButtonClick={() => void router.push("/levels/B2/topics")}
        /> */}
      </div>
    </div>
  );
};

export default LevelSelection;
