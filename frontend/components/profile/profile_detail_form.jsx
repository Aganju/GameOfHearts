import React from 'react';
import { Form, Text, Select } from 'react-form';

class ProfileDetailForm extends React.Component{
  constructor(props){
    super(props);

    this.state = { imgPreviewUrl: '', imgFile: null};
    this.updateProfile = this.props.updateProfile;
    this.profile = this.props.profile;
    this.closeModal = this.props.closeModal;
    this.handleFileChange =  this.handleFileChange.bind(this);
  }

  handleFileChange(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imgPreviewUrl: reader.result, imgFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imgPreviewUrl: "", imgFile: null });
    }
  }

  render(){
    return (
      <Form
        onSubmit={(values) => {
          debugger;
        }}

        defaultValues={{
          orientation: this.profile.details.orientation,
          gender: this.profile.details.gender,
          status: this.profile.details.status,
          relationship_type: this.profile.details.relationship_type,
          height: this.profile.details.height,
          body_type: this.profile.details.body_type,
        }}
      >
        {({ submitForm}) => {
          return (
            <form onSubmit={ submitForm }>
              <h3>Basics</h3>
              <div>
                <img src={this.state.imgPreviewUrl}/>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={this.handleFileChange}
                  />
              </div>
              <div id='iama'>
                <h5>I am a...</h5>
                <div>
                  <Select
                    field='orientation'
                    options={[
                      { label: 'Straight', value: 'Straight' },
                      { label: 'Gay', value: 'Gay' },
                      { label: 'Bisexual', value: 'Bisexual' },
                      { label: 'Other', value: 'Other' }
                    ]}
                  />
                  <Select
                    field='gender'
                    options={[
                      { label: 'Man', value: 'Man' },
                      { label: 'Woman', value: 'Woman' },
                      { label: 'Other', value: 'Other' }
                    ]}
                  />
                </div>
              </div>
              <div id='status'>
                <h5>Status</h5>
                <div>
                  <Select
                    field='status'
                    options={[
                      { label: '___' , value: null },
                      { label: 'Single', value: 'Single' },
                      { label: 'Seeing Someone', value: 'Seeing Someone' },
                      { label: 'Married', value: 'Married' },
                      { label: 'Open Relationship', value: 'Open Relationship' }
                    ]}
                  />
                </div>
              </div>
              <div id='rel-type'>
                <h5>Relationship Type</h5>
                <div>
                  <Select
                    field='relationship_type'
                    options={[
                      { label: '___' , value: null },
                      { label: 'Monogamous', value: 'Monogamous' },
                      { label: 'Non-monogamous', value: 'Non-monogamous' },
                    ]}
                  />
                </div>
              </div>
              <div id='height-body'>
                <div id='height'>
                  <h5>Height</h5>
                  <Select
                    field='feet'
                    options={[
                      { label: "3'" , value: 3 },
                      { label: "4'" , value: 4 },
                      { label: "5'" , value: 5 },
                      { label: "6'" , value: 6 },
                      { label: "7'" , value: 7 },
                    ]}
                  />
                  <Select
                    field='inches'
                    options={[
                      { label: "0'" , value: 0 }, { label: "1'" , value: "1" },
                      { label: "2'" , value: 2 }, { label: "3'" , value: 3 },
                      { label: "4'" , value: 4 }, { label: "5'" , value: 5 },
                      { label: "6'" , value: 6 }, { label: "7'" , value: 7 },
                      { label: "8'" , value: 8 }, { label: "9'" , value: 9 },
                      { label: "10'" , value: 10 }, { label: "11'" , value: 11 },
                    ]}
                  />
                </div>
                <div>
                  <h5>Body type</h5>
                  <Select
                    field='body_type'
                    options={[
                      { label: "--", value: null },
                      { label: "Rather not say", value: "Rather not say" },
                      { label: "thin", value: "thin" },
                      { label: "Overweight", value: "Overweight" },
                      { label: "Average Build", value: "Average Build" },
                      { label: "Fit", value: "Fit" },
                      { label: "Jacked", value: "Jacked" },
                      { label: "A little extra", value: "A little extra" },
                      { label: "Curvy", value: "Curvy" },
                      { label: "Full figured", value: "Full figured" },
                      { label: "Used up", value: "Used up" },
                    ]}
                  />
                </div>
              </div>
              <div>
                <button>Submit</button>
                <button onClick={this.closeModal}>Cancel</button>
              </div>
            </form>
          );
        }}
      </Form>
    );
  }
}

export default ProfileDetailForm;
