import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const CustomTabs = ({ defaultValue, tabs, className, onChange }: any) => {
    const router = useRouter();
    const tab = router?.asPath || defaultValue;

    const [activeTab, setActiveTab] = useState<any>(defaultValue);

    const handleTabChange = async (tab: any) => {
        if (activeTab === tab?.value) return;
        onChange && onChange(tab);
        await router.push(tab);
    };

    useEffect(() => {
        setActiveTab(tab);
    }, [tab]);

    return (
        <Tabs
            value={activeTab}
            defaultValue={defaultValue}
            className={`custom-tabs ${className}`}
        >
            <TabsList className="custom-tabs-list">
                {tabs.map((tab: any) => (
                    <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        onClick={() => handleTabChange(tab?.value)}
                        className={`custom-tabs-trigger ${activeTab === tab?.value ? "custom-tabs-trigger-active" : ""}`}
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabs.map((tab: any) => (
                <TabsContent key={tab.value} value={tab.value} className="custom-tabs-content">
                    {tab.content ?? null}
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default CustomTabs;
