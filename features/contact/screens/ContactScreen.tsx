import PageTransition from '@/shared/components/PageTransition';
import { ContactType } from './contact.contants';

const ContactScreen = () => {
  return (
    <PageTransition className="h-full w-1/3 flex flex-col justify-center tracking-tight font-montserrat">
      <p className="text-black dark:text-white font-bold text-[17px]">
        Email:{' '}
        <a
          href={`mailto:${ContactType.Email}`}
          className="underline font-normal text-base tracking-tight hover:text-gray-300"
        >
          {ContactType.Email}
        </a>
      </p>
      <p className="text-black dark:text-white tracking-[-0.03em] text-[17px] mb-4">
        <span className="font-bold">On the internet: </span>
        <a
          href={ContactType.LinkedIn}
          className="underline font-normal text-base tracking-tight hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {' / '}
        <a
          href={ContactType.GitHub}
          className="underline font-normal text-base tracking-tight hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {' / '}
        <a
          href={ContactType.Instagram}
          className="underline font-normal text-base tracking-tight hover:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </p>
    </PageTransition>
  );
};

export default ContactScreen;
