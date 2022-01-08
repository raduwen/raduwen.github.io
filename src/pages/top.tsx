import { MainLayout } from '@/layouts/MainLayout'

const TopPage = () => {
  return <div>top</div>
}

TopPage.getLayout = (page: JSX.Element) => {
  return <MainLayout>{page}</MainLayout>
}

export default TopPage
