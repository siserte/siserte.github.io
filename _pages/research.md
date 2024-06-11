---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

<h2>Research Lines</h2>
<h3 style="color:gray;">Dynamic Resources in HPC Environments</h3>
<p>Leveraging the DMR malleability framework, new methods and techniques for managing dynamic resources are being investigated and developed.</p>

<h3 style="color:gray;">Offloading Programming with the OpenMP API</h3>
<p>Data Processing Units (DPUs) are a new class of programmable processor system on a chip (SoC) that combine industry-standard, high-performance, software-programmable, and processing elements (such as CPUs and GPUs) tightly coupled to the other SoC components.</p>
<p>The OpenMP programming model is enabled to support kernels offloading to DPU likewise it is done for GPU, since OpenMP 4.0, with the offload feature through DOCA. Thus, users will be able to offload computation to GPU and/or DPU indistinctively using the standard OpenMP syntaxis.</p>

<h3 style="color:gray;">HPC Workload Characterization</h3>
<p>In this collaboration with NERSC @ LBNL, we are studying the behavior of users and jobs in Cori supercomputer.  In this regard, we are analyzing data from resource requests and performance metrics.</p>

<h2>Current Projects</h2>
{% for post in site.projects reversed %}
    {% if post.type == "research" %}
        {% assign curr_date = "now" | date: "%s" %}
        {% assign end_date = post.date | date: "%s" %}
        {% if end_date > curr_date %}
            {% include archive-single-project.html %}
        {% endif %}
    {% endif %}
{% endfor %}

<h2> Former Projects </h2>
<strong>PhD Thesis - High-Throughput Computation through Efficient Resource Management:</strong>
<p>Scientific applications run on supercomputers where thousands of nodes are shared among users. 
    When those applications start, their resources remain allocated until the job ends. 
    We have detected two potential approaches in resource managing, with which we increase the global throughput and provide a better utilization of the underlying resources.</p>
<p>The Dynamic Management of Resource (DMR) framework is conceived to facilitate the programmability of malleable applications automating resource reallocation, process handling, and data distribution. DMR is based on the Message Passing Interface (MPI) programming model, the standard de facto for developing HPC distributed applications. DMR adjusts the process number of the jobs depending on the cluster status in terms of resource availability and quantity of pending jobs.</p>
Performance analyses have reported a makespan reduction of <strong>4x</strong>, when combined with moldability, compared to traditional rigid workloads. DMR has also been used in GPU-capable workloads improving their energy efficiency up to <strong>2.5x</strong>.
The relevance of the DMR malleability solution is such that it has been incorporated for the European projects: “The European Pilot” EuroHPC-JU, DEEP-SEA, and TimeX.

<strong>MSc Thesis - A Remote GPU Manager for HPC Clusters:</strong>
<p>rCUDA is a virtualization solution which allows to share GPUs among the nodes in a cluster. SLURM is a workload manager able to schedule jobs and manage resources. 
    In this project I have been in charge of the integration of both technologies, 
    since RCUDA have not got the feature of managing workloads and SLURM does not know how to share resources such as GPUs. 
    Nowadays, the RCUDA project offers this integration by applying a patch to SLURM.</p>

{% for post in site.projects reversed %}
    {% if post.type == "research" %}
        {% assign curr_date = "now" | date: "%s" %}
        {% if post.my-end-date %}
            {% assign end_date = post.my-end-date | date: "%s" %}
        {% else %}
            {% assign end_date = post.date | date: "%s" %}

        {% if end_date <= curr_date %}
            {% include archive-single-project.html %}
                {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}

<p><strong>REALCLOUD - Real Data Center Cloud Services and Environment</strong>
This project was carried out by several entities. We were responsible for developing a middleware what was able to consolidate the system, making decisions depending on the TI data gathered in real-time. So that, it would migrate virtual machines, turn on and shut down nodes in order to boost the performance and reduce, as much as possible the carbon footprint.</p>

<p><strong>MONICA - Monitoring and control system with intelligent energy efficiency management for ICT resources in ultradense data centers oriented HPC and Cloud Computing</strong>
The collaboration of our research group in this project was focus on the theoretical study of the power consumption in the cluster of the FCSCL (SuperComputing Foundation of Castilla y León (Spain)).</p>

<p><strong>ACEI - Adjusting the Energy Consumption in Computer Facilities</strong>
This project consisted in the development of a simulator to assess energy saving strategies and policies in HPC workloads. The real system Energy Saving Cluster (ESC) based on Sun Grid Engine (SGE) was modeled in order to simulate its behavior, taking into account: the different features of the components in the cluster, the scheduling and the energy saving policies and generating statistics and charts with the results. The simulator was written in Python and had a user web interface for its management.</p>