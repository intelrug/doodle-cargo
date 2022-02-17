import { EntityRepository, Repository } from 'typeorm';

import { Setting } from '../models/settings.entity';

@EntityRepository(Setting)
export class SettingsRepository extends Repository<Setting> {}
