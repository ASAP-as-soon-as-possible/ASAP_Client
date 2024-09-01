import { toast } from 'react-toastify';

export const notify = () => toast('링크 복사가 완료되었습니다', { toastId: 'link' });

export const downLoadNotify = () => toast('이미지 다운로드를 시작합니다');
//test
