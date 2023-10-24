import { saveState, info } from '@actions/core';
import { exec } from '@actions/exec';

const setup = async () => {
  info('setup actions')
  await exec('echo', ['hello'])
};

const post = async () => {
  info('cleanup actions');
  await exec('echo', ['bye'])
};

const IsPost = !!process.env['STATE_isPost'];

if (!IsPost) {
  saveState('isPost', 'true');
}

if (IsPost) {
  post();
} else {
  setup();
}