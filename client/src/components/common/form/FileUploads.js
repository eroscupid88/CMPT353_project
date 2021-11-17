import React,{Component} from 'react';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import { toast } from 'react-toastify';
import { uploadImage }  from '../../../action/profileAction';


export default class FileUploads extends Component {

  constructor() {
    super();
    this.setupReader()
    this.state = {
      selectedFile: undefined,
      imageBase64: '',
      initialImageBase64: '',
      pending: false,
      status: 'INIT'
    }

    this.onChange = this.onChange.bind(this);
  }

  setupReader() {
    this.reader = new FileReader();
    this.reader.addEventListener('load', (event) => {
      const { initialImageBase64 } = this.state;
      const imageBase64 = event.target.result;
      if (initialImageBase64) {
        this.setState({imageBase64});
      } else {
        this.setState({imageBase64, initialImageBase64: imageBase64});
      }
    });
  }

  resetToDefaultState(status) {
    this.setState({
      pending: false,
      status,
      selectedFile: undefined,
      initialImageBase64: '',
      imageBase64: ''
    });
  }

  onChange(event) {
    const file = event.target.files[0];

    if (file) {
      this.setState({
        file,
        initialImageBase64: ''
      });
      this.reader.readAsDataURL(file);
    }
  }

  onImageLoaded(image) {
    if (image.naturalWidth < 950 && image.naturalHeight < 720) {

      this.resetToDefaultState('INIT');
      toast.error('Minimum width of an image is 950px and height 720px');
      return;
    }
  }

  onError(error) {
    this.setState({pending: false, status: 'FAIL'});
  }

  onSuccess(uploadedImage) {
    const {onChange} = this.props.input || this.props;

    this.resetToDefaultState('OK');

    onChange(uploadedImage);
  }



  renderSpinningCircle() {
    const { pending } = this.state;

    if (pending) {
      return (
        <div className='img-loading-overlay'>
          <div className='img-spinning-circle'>
          </div>
        </div>
      )
    }
  }

  renderImageStatus() {
    const { status } = this.state;
    if (status === 'OK') {
      return <div className='alert alert-success'> Image Uploaded Succesfuly! </div>
    }
    if (status === 'FAIL') {
      return <div className='alert alert-danger'> Image Upload Failed! </div>
    }
  }

  render() {
    const { selectedFile, imageBase64, initialImageBase64 } = this.state;

    return (
      <div className='img-upload-container'>
        <label className='img-upload btn btn-bwm'>
          <span className='upload-text'> Select an image </span>
          <input type='file'
                 accept='.jpg, .png, .jpeg'
                 onChange={this.onChange}/>
        </label>

        { selectedFile &&
        <button className='btn btn-success btn-upload'
                type='button'
                disabled={!selectedFile}
                onClick={() => this.uploadImage()}>
          Upload Image
        </button>
        }

        { imageBase64 &&
        <div className='img-preview-container'>
          <div className='img-preview'
               style={{'backgroundImage': 'url(' + imageBase64 + ')'}}>
          </div>

          {this.renderSpinningCircle()}
        </div>
        }
        {this.renderImageStatus()}
      </div>
    )
  }
}





