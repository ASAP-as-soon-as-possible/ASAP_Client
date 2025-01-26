import { useParams } from 'react-router-dom';
import { notify } from 'utils/toast/copyLinkToast';

const useShareLink = (position: string) => {
  const { meetingId } = useParams();
  const route = position === 'cueCard' ? 'q-card' : 'meet';
  const inviteURL = `${window.location.origin}/${route}/${meetingId}`;

  const handleWebShare = async () => {
    const shareData = {
      meet: {
        title: 'ASAP',
        text: '회의 시간을 입력해주세요 \n',
        url: inviteURL,
      },
      'q-card': {
        title: 'ASAP',
        text: '회의 시간이 확정되었어요! \n',
        url: inviteURL,
      },
    };

    if (navigator.share) {
      navigator.share(shareData[route]);
    } else {
      handleCopyToClipboard();
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inviteURL);
      notify();
    } catch {
      alert('링크복사에 실패했습니다. \n 다시 시도해주세요.');
    }
  };

  return { inviteURL, handleCopyToClipboard, handleWebShare };
};

export default useShareLink;
