window.config = {
  // cornerstoneExtensionConfig: {},
  flag: 'erkom-prod',
  routerBasename: '/',
  showStudyList: true,
  filterQueryParam: false,
  servers: {
    dicomWeb: [
      {
        name: 'GOOGLE',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        wadoUriRoot:
          'https://us-central1-erkom-prod.cloudfunctions.net/api/wado',
        qidoRoot: 'https://us-central1-erkom-prod.cloudfunctions.net/api/wado',
        wadoRoot: 'https://us-central1-erkom-prod.cloudfunctions.net/api/wado',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors', // sin esto no anda
        thumbnailRendering: 'wadors', // sin esto no anda
      },
    ],
  },
  maxConcurrentMetadataRequests: 5,
};
