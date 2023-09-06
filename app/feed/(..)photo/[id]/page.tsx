import Modal from '@/components/common/Modal';

type Props = {
  params: any;
};
const PhotoModal = ({ params }: Props) => {
  // const photo = photos.find(p => p.id === params.id);
  return (
    <Modal>
      <div>Modal</div>
    </Modal>
  );
};

export default PhotoModal;
