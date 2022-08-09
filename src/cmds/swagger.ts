import type { CommandOptions } from '../lib/baseCommand';
import type { Options } from './openapi';

import { warn } from '../lib/logger';

import OpenAPICommand from './openapi';

export default class SwaggerCommand extends OpenAPICommand {
  constructor() {
    super();

    this.command = 'swagger';
    this.usage = 'swagger [file] [options]';
    this.description = 'Alias for `rdme openapi`. [deprecated]';
    this.position += 1;
  }

  async run(opts: CommandOptions<Options>) {
    warn('`rdme swagger` has been deprecated. Please use `rdme openapi` instead.');
    return super.run(opts);
  }
}