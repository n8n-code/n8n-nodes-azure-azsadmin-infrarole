import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminInfraroleApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminInfraroleApi';

        displayName = 'Azure Azsadmin Infrarole API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminInfrarole/azure-azsadmin-infrarole.png', dark: 'file:../nodes/AzureAzsadminInfrarole/azure-azsadmin-infrarole.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Infrarole API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
