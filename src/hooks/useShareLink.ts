import { useParams } from 'react-router-dom';
import { notify } from 'utils/toast/copyLinkToast';

const useShareLink = () => {
  const { meetingId } = useParams();

  const inviteURL = `${window.location.origin}/meet/${meetingId}`;
  const shareData = {
    title: 'ASAP',
    text: '회의 시간을 입력해주세요',
    url: inviteURL,
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inviteURL);
      notify();
    } catch {
      alert('링크복사에 실패했습니다. \n 다시 시도해주세요.');
    }
  };

  const handleWebShare = async () => {
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      handleCopyToClipboard();
    }
  };

  return { inviteURL, handleCopyToClipboard, handleWebShare };
};

export default useShareLink;
