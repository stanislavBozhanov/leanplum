import React from 'react';
import { CampaignEntity } from '../models/CampaignEntity';

export interface ColumnDescriptor<T> {
  title: string;
  render: (data: T) => React.ReactNode | null;
}

export interface TableProps {
  columns: Array<ColumnDescriptor<CampaignEntity>>;
  items: Array<any>;
}

export const Table = ({ columns, items }: TableProps) => {
  const renderRow = (item: any) => {
    return (
      <tr key={`${item.id}-row`}>
        {columns.map((c, index) => (
          <td key={`${item.id}-data-${index}`}>{c.render(item)}</td>
        ))}
      </tr>
    );
  };

  return (
    <table cellSpacing="0">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={`${c.title}-title`}>{c.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>{items.map((item) => renderRow(item))}</tbody>
    </table>
  );
};
