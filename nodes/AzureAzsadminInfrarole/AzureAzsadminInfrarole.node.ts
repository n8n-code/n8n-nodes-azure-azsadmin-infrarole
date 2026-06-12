import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminInfrarole implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Infrarole',
                name: 'N8nDevAzureAzsadminInfrarole',
                icon: { light: 'file:./azure-azsadmin-infrarole.png', dark: 'file:./azure-azsadmin-infrarole.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Infrastructure role operation endpoints and objects',
                defaults: { name: 'Azure Azsadmin Infrarole' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminInfraroleApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
