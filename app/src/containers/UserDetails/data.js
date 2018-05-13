const data = [
  {
    type: 0,
    params: {
      label: 'Name',
      required: false,
      value: 'Obiwan Kenobi',
    },
  },
  {
    type: 1,
    params: {
      label: 'Date of Birth',
      required: true,
      min: 18,
    },
  },
  {
    type: 2,
    params: {
      label: 'Gender',
      required: false,
      value: 0,
      options: [
        {
          label: 'Male',
          value: 0,
        },
        {
          label: 'Female',
          value: 1,
        },
      ],
    },
  },
];

export default data;
