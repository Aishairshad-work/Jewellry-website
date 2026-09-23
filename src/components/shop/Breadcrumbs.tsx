import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export const Breadcrumbs: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb navigation">
      <ol className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">HOME</Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li className="breadcrumbs__separator" aria-hidden="true">/</li>
              <li className="breadcrumbs__item">
                {isLast || !item.path ? (
                  <span className="breadcrumbs__current" aria-current="page">
                    {item.label.toUpperCase()}
                  </span>
                ) : (
                  <Link to={item.path} className="breadcrumbs__link">
                    {item.label.toUpperCase()}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
