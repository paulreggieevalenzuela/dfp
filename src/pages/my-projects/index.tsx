import ProjectLayout from '@/components/layouts/ProjectLayout';
import ProjectTabs from '@/components/projects/ProjectTabs';
import ProjectTable from '@/components/ProjectsTable';

import data from './my-projects-mock-data.json';

export default function Page() {
  return (
    <ProjectLayout>
      <ProjectTabs index={0}>
        <ProjectTable
          data={data.data}
          columns={data.columns}
          rowActions={data.rowActions}
          filterByColumns={['pm', 'client', 'progress', 'estimatedHours']}
          sortByColumns={['pm', 'client', 'progress', 'estimatedHours']}
        />
      </ProjectTabs>
    </ProjectLayout>
  );
}

/* TODO: after API auth have been finalized, move global page protections in middleware.ts,
for now just copy and paste this to protect a page
*/
// import { getSession } from 'next-auth/react'

// import { checkUserRoleName } from '@/utils/arrayUtils'

// export async function getServerSideProps(context: any) {
//   const session: any = await getSession({ req: context.req });

//   if (session &&
//     (
//       checkUserRoleName(session.user.roles, 'COMPANY_ADMIN') ||
//       checkUserRoleName(session.user.roles, 'SITE_ADMIN')
//     )) {
//     return {
//       props: { session }
//     }

//   } else {
//     return {
//       redirect: {
//         destination: `/login?callbackUrl=${context.resolvedUrl}`,
//         permanent: false,
//       }
//     }
//   }
// }