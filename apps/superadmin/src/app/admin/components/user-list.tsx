import { BasePropertyProps, ViewHelpers } from 'adminjs';

const UserList = (props: BasePropertyProps) => {
  const { record, property } = props;
  const h = new ViewHelpers();
  const refId = record && record.params[property.path];
  const href = h.recordActionUrl({
    resourceId: property.reference ?? '',
    recordId: refId,
    actionName: 'show',
  });

  const allRecords = record && record.populated[property.path];

  return (
    <a style={{ color: 'red' }} href={href}>
      {refId}
      <br />
      Hello...
      {allRecords?.params.notes}
    </a>
  );
};

export default UserList;
