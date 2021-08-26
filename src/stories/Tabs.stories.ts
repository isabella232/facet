import { Story, Meta } from "@storybook/html";

export default {
    title: "Components/Tabs",
    argTypes: {
        orientation: {
            control: {
                type: "select",
                options: [
                    "horizontal",
                    "vertical",
                ],
            },
        },
    },
} as Meta;

export interface TabsProps {
    orientation?: "horizontal" | "vertical";
}

const Template: Story<TabsProps> = ({ orientation }) => {
    return `
        <pulumi-tabs orientation="${orientation}">
            <pulumi-tab slot="tab" id="tab-1">Tab one</pulumi-tab>
            <pulumi-tab slot="tab" id="tab-2">Tab two</pulumi-tab>
            <pulumi-tab slot="tab" id="tab-3">Tab three</pulumi-tab>
            <pulumi-tab-panel slot="tabpanel">Tab panel 1</pulumi-tab-panel>
            <pulumi-tab-panel slot="tabpanel">Tab panel 2</pulumi-tab-panel>
            <pulumi-tab-panel slot="tabpanel">Tab panel 3</pulumi-tab-panel>
        </pulumi-accordion>
    `;
};

export const Tabs = Template.bind({});
