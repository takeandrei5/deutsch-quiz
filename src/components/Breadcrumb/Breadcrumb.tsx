import { useRouter } from "next/router";
import type { BreadcrumbItem, BreadcrumbProps } from "./types";

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  breadcrumbItems,
}: BreadcrumbProps) => {
  const router = useRouter();

  const renderBreadcrumbItems = (
    breadcrumbItems: BreadcrumbItem[]
  ): JSX.Element[] => {
    const renderBreadcrumbItemBody = (
      breadcrumbItem: BreadcrumbItem
    ): JSX.Element => {
      if (router.asPath === breadcrumbItem.href) {
        return <b>{breadcrumbItem.label}</b>;
      }

      return (
        <a className="text-neutral" href={breadcrumbItem.href}>
          {breadcrumbItem.label}
        </a>
      );
    };

    return breadcrumbItems.map((breadcrumbItem: BreadcrumbItem) => {
      return (
        <li
          className="text-neutral before:text-neutral"
          key={`${breadcrumbItem.label} - ${breadcrumbItem.href || ""}`}
        >
          {renderBreadcrumbItemBody(breadcrumbItem)}
        </li>
      );
    });
  };

  return (
    <div className="breadcrumbs overflow-hidden text-xl font-medium text-neutral">
      <ul>{renderBreadcrumbItems(breadcrumbItems)}</ul>
    </div>
  );
};

export default Breadcrumb;
