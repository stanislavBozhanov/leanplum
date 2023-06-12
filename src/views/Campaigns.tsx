import React from 'react';
import { ColumnDescriptor, Table } from '../components/Table';
import { CampaignEntity, CampaignStatus, SAMPLE_DATA } from '../models/CampaignEntity';

export const Campaigns = () => {
  const statusText = (status: CampaignStatus): React.ReactNode => {
    switch (status) {
      case CampaignStatus.RUNNING:
        return <span>Running</span>;
      default:
      case CampaignStatus.DRAFT:
        return <span>Draft</span>;
    }
  };

  const columns: Array<ColumnDescriptor<CampaignEntity>> = [
    {
      title: 'Campaign Name',
      render: (campaign: CampaignEntity) => (
        <div className="name">
          {campaign.name}
          <div className="author">Created by {campaign.author.name}</div>
        </div>
      ),
    },
    {
      title: 'Status',
      render: (campaign: CampaignEntity) => statusText(campaign.status),
    },
  ];

  return (
    <div>
      <div className="header">
        <h2>Campaigns</h2>
        <button className="btn primary">Create Campaign</button>
      </div>
      <div className="content">
        <Table columns={columns} items={SAMPLE_DATA} />
      </div>
    </div>
  );
};
