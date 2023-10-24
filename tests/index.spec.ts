import { env, cwd } from 'process';
import { execSync } from 'child_process';
import { join } from 'path';

const testEnv = {
  ...env,
};

test('should run action', () => {
  try {
    const ip = join(cwd(), 'dist', 'index.js');
    console.log(execSync(`bun ${ip}`, {
      env: testEnv
    }).toString());
  } catch (e) {
    if ('stdout' in e && 'stderr' in e) {
      console.log(e.stderr.toString());
      console.log(e.stdout.toString());
    } else {
      console.log(e);
    }
  }
});

test('should run post action', () => {
  try {
    const ip = join(cwd(), 'dist', 'index.js');
    console.log(execSync(`bun ${ip}`, {
      env: {
        ...testEnv,
        STATE_isPost: 'true'
      }
    }).toString());
  } catch (e) {
    if ('stdout' in e) {
      console.log(e.stderr.toString());
      console.log(e.stdout.toString());
    } else {
      console.log(e);
    }
  }
});