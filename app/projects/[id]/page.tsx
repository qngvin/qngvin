import { ProjectDetailScreen } from '@/features/projects/screens/ProjectDetailScreen';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ProjectDetailScreen id={id} />;
}
