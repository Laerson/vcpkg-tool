// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SemVer } from 'semver';
import { MetadataFile } from '../amf/metadata-file';
import { IdentityKey, IndexSchema, SemverKey, StringKey } from './indexer';


export class ArtifactIndex extends IndexSchema<MetadataFile, ArtifactIndex> {
  id = new IdentityKey(this, (i) => i.id);
  version = new SemverKey(this, (i) => new SemVer(i.version));
  summary = new StringKey(this, (i) => i.summary);
}
