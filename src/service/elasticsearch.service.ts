import axios from 'axios';
import * as dotenv from 'dotenv';
import { Client } from '@elastic/elasticsearch';

type User = {
  id: number;
  email: string;
  first_name: string;
};

export class ElasticsearchService {
  public client: Client;

  constructor() {
    dotenv.config({
      path: './.env',
    });
    this.client = new Client({
      node: `${process.env.ELASTIC_HOST}`,
      auth: {
        username: `${process.env.ELASTIC_USER}`,
        password: `${process.env.ELASTIC_PASSWORD}`
      },
      tls: {
        // might be required if it's a self-signed certificate
        rejectUnauthorized: false
      }
    })

  }

  public async sendLog(system: string, module: string, transaction: string, user: string, unit: string, data: any) {
    try {
      const query_create_index = {
        'settings': {
          'index': 'system_logs',
          'number_of_replicas': '0'
        }
      }
      // this.client.indices.create({ index: 'system_logs', 'ignore': 400})

      //console.log(await this.client.indices.getSettings());
      //await this.client.cluster.putSettings( query_create_index);
      const result = await this.client.index({
        index: 'system_logs',
        document: {
          transaction: transaction,
          module: module,
          user: user,
          unit: unit,
          data: data,
          date: new Date,
          system: system
        }
      })
    } catch (error) {
      console.error("ERRO AO ENVIAR LOG!");
    }
  }
  public async sendLogPacient(system: string, module: string, transaction: string, user: string, unit: string, idPaciente:string,data: any) {
    try {
      const query_create_index = {
        'settings': {
          'index': 'system_logs',
          'number_of_replicas': '0'
        }
      }
      // this.client.indices.create({ index: 'system_logs', 'ignore': 400})

      //console.log(await this.client.indices.getSettings());
      //await this.client.cluster.putSettings( query_create_index);
      const result = await this.client.index({
        index: 'system_logs',
        document: {
          transaction: transaction,
          module: module,
          user: user,
          unit: unit,
          data: data,
          date: new Date,
          system: system,
          idPaciente: idPaciente
        }
      })
    } catch (error) {
      console.error("ERRO AO ENVIAR LOG!");
    }
  }


}
